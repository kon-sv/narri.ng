import * as fs from 'fs';

export const DictionaryService = () => {
  let dictionary = JSON.parse(fs.readFileSync('./JMdict_e.json'))


  /**
   * @returns {Array<{ent_seq: string, k_ele: Array|Object}>}
   * */
  const getAllRecordsRaw = () => {
    return dictionary.JMdict.entry.filter((entry) => entry.k_ele);
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


  return {
    getTotalRecords: () => dictionaryIndex.length,
    getAllRecords,
    getSimpleRecordsIndex
  }
}

export default DictionaryService;
