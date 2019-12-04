$(function () {

  $('#ta-approve').click(() => {
    axios.get('https://fierce-anchorage-37364.herokuapp.com/taResponse', {
      params: {
        action: 'approve'
      }
    });
    
  })

  $('#ta-decline').click(() => {
    axios.get('https://fierce-anchorage-37364.herokuapp.com/taResponse', {
      params: {
        action: 'decline'
      }

    });
  });


  $('#doctor-approve').click(() => {
    axios.get('https://fierce-anchorage-37364.herokuapp.com/doctorResponse', {
      params: {
        action: 'approve'
      }
    });
  })

  $('#doctor-decline').click(() => {
    axios.get('https://fierce-anchorage-37364.herokuapp.com/doctorResponse', {
      params: {
        action: 'decline'
      }
    });
  });

});