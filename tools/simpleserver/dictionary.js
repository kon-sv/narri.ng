import * as fs from 'fs';

export const DictionaryService = () => {

  // File is around 80mb, maybe offload it to disk somehow, like an sqlite
  let dictionary = JSON.parse(fs.readFileSync('./JMdict_e.json'))
  dictionary = dictionary.JMdict.entry.filter((entry) => entry.k_ele);




  /**
   * @returns {Array<{ent_seq: string, k_ele: Array|Object}>}
   * */
  const getAllRecordsRaw = () => {
    return dictionary;
    // return dictionary.JMdict.entry.filter((entry) => entry.k_ele);
  }

  const dictionaryIndex = getAllRecordsRaw().map((entry) => {
    const data = entry.k_ele;
    return [
      entry.ent_seq,
      data.length > 0 ? data[0].keb : data.keb,
    ]
  })


  const paginatedObj = (data, page, pageSize, morph = (data) => data) => {
    page = Number(page)
    pageSize = Number(pageSize)
    return {
      data: morph(data.slice((page - 1) * pageSize, page * pageSize)),
      meta: {
        page: page,
        pageSize: pageSize,
        total: data.length
      }
    }
  };

  const getAllRecords = () => {
    return dictionaryIndex;
  }

  const getSimpleRecordsIndex = (page = 1, pageSize = 100) => {
    return paginatedObj(getAllRecords(), page, pageSize, (data) => Object.fromEntries(data))
  }

  const debugDictionary = () => {
    return getAllRecordsRaw().slice(0, 5);
  }

  const letterLookup = () => {
    const kana = (getAllRecords()
      .map(function(kv) {
        return {
          'letter': kv[1][0],
          'seq_id': kv[0]
        }
      })
      .reduce((acc, curr, idx) => {
        if (!(curr.letter in acc)) {
          acc[curr.letter] = {
            "seq_id": curr.seq_id,
            "index": idx
          };
        }
        return acc;
      }, {}))

    const kanaArray = Object.keys(kana).map((letter) => {
      return { 'letter': letter, ...kana[letter] }
    })

    return {
      "kana": kanaArray
    }
  }


  return {
    getTotalRecords: () => dictionaryIndex.length,
    getAllRecords,
    getSimpleRecordsIndex,
    letterLookup,
    debugDictionary
  }
}

export default DictionaryService;
