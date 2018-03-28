const resumeApi = {
  fetchData(type) {
    return fetch(`https://raw.githubusercontent.com/iamdevlinph/resume-data/master/${type}.json`, {
      method: 'GET',
    }).catch(() => {
      // console.log('Fail zone');
    }).then((res) => {
      let flag;
      if (res.ok) {
        flag = Promise.resolve(res);
      }
      // console.log('error', res);
      return flag;
    });
  },
};

export default resumeApi;
