function LocalStorage() {
    // get all of the values stored in favorites in local storage

    let localStorageData = localStorage.getItem("Favorites");
    console.log(localStorageData)
    if (localStorageData == null) {
      return [];
    }

    return JSON.parse(localStorageData);
  }




  export default LocalStorage;