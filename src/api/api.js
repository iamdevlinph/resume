const resumeApi = {
  fetchData(type) {
    return fetch(`https://raw.githubusercontent.com/iamdevlinph/resume-data/master/${type}.json`, {
      method: 'GET'
    }).catch(() => {
      console.log('Fail zone');
    }).then((res) => {
      if (res.ok) {
        return Promise.resolve(res)
      } else {
        console.log('error', res);
      }
    });
  },
};

export default resumeApi;
