const filterForCollection = async (fetchedData) => {
  // Map ID Form Collection || AS REF OF Index(can't use Title )
  const arrayOfIds = fetchedData.map((anime) => anime.ids.simkl_id)
  //Filter IT 
  const removeDublicated = fetchedData.filter((item, index) => {
    const indexOfArray = arrayOfIds.indexOf(item.ids.simkl_id)
    return indexOfArray === index
  })

  //Map From Unique Data SET
  const idsTitleURL = removeDublicated.map((anime) => {
    return {
      title: anime.title,
      ids: anime.ids,
      url: anime.url
    }
  })
  return idsTitleURL
}
// Export As A module To Use In StartUp .js TO Filter
module.exports = { filterForCollection }