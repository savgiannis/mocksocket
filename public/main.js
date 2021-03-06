$(function () {


  /*====== DOCTOR/PATIENT ======*/


  $('#ta-approve').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/taResponse', {
      params: {
        action: 'approve'
      }
    });
  })

  $('#ta-decline').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/taResponse', {
      params: {
        action: 'decline'
      }
    });
  });


  $('#doctor-approve').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/doctorResponse', {
      params: {
        action: 'approve'
      }
    });
  })

  $('#doctor-decline').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/doctorResponse', {
      params: {
        action: 'decline'
      }
    });
  });

  $('#cantFindDoctors').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/cantFindDoctors');
  });

  $('#insuranceEmailError').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/insuranceEmailError');
  });

  $('#insuranceAboutToExpire').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/insuranceAboutToExpire');
  });

  $('#insuraceExpired').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/insuraceExpired');
  });

  $('#cardExpired').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/cardExpired');
  });

  $('#paymentFailed').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/paymentFailed');
  });

  /*====== TA ======*/


  $('#firstStep').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/firstStep');
  });

  $('#secondStep').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/secondStep');
  });

  $('#thirdStep').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/thirdStep');
  });

  $('#fourthStep').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/fourthStep');
  });

  $('#fifthStep').click(() => {
    axios.get('https://dn2me-websocket-tests.herokuapp.com/fifthStep');
  });


}); 