

$(document).ready(() => {
  const modal = $('#myModal');
  const inputName = $('input[name=inputName]');
  const evaluateButton = $('#myBtn');
  const saveNameButton = $('#saveName');
  const questionCounter = $('#question-number');
  const ratingContainer = $('.star-widget');
  const questionDescription = $('.question-description');

  let step = 0;
  let inputNamevalue;
  let questions = [
    {
      description: 'Qual o seu nome?',
      answer: 0,

    },
    {
      description: 'Qual foi a sua primeira impressão?',
      answer: 0,
    },
    {
      description: 'O que achou da interface do site?',
      answer: 0,
    },
    {
      description: 'Você gostou da forma como seu problema foi resolvido? ',
      answer: 0,
    },
    {
      description: 'O que você diria para um amigo dos nossos serviços?',
      answer: 0,
    }
  ]


  handleNextStepClick = () => {
    setStep();
    render();
  }

  closeModal = () => {
    modal.css('display', 'none');
    evaluateButton.css('background-color', '#444');
    evaluateButton.attr('disabled', true);
  }

  setStep = () => {

    if(step === 5){
      closeModal();
      return;
    };

    step = step +1;
  }

  setInputName = (name) => {
    inputNamevalue = name;
  }

  addSaveStepButtonListener = () => {
    const saveStep = $('#saveStep');
    saveStep.click(handleNextStepClick);
  }

  addInputRadioListener = () => {
    const inputRates = $('input:radio[name=rate]');
    inputRates.each(function(index){

      $(this).change(function(){
        const rate = $(this).val();
        questions[step].answer = rate;
      });

    });
  }

  sendResquetToApi = async () => {
    const res = await fetch('https://5f4b11f341cb390016de37aa.mockapi.io/api/v1/feedback', {
      method: 'POST',
      body: JSON.stringify({name: inputNamevalue, questions})
    });
    console.log("Res:", res);

    if(res.status !== 200){
      throw new Error("Não foi possível registrar a avaliação de feedback");
    }

    const parsed =  await response.json();
    return parsed;
  }

  showLoading = (show) => {
    const icon = `<svg style="color: white; width: 25px; height: 25px;" data-prefix="fas" data-icon="spinner" class="svg-inline--fa fa-spinner fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg>`;
    show ? evaluateButton.append(icon) : evaluateButton.html('Ok');
  }

  saveFeedback = async () => {
    let response;
    showLoading(true);

    try {

      response = await sendResquetToApi();

    } catch (error) {
      console.log("Error", error);
    }

    showLoading(false);
    return response;
  }

  addEventListeners = () => {

    evaluateButton.click(() => {
      render();
      modal.css('display', 'flex');
    });

    inputName.change(() => {
        const value = $('input[name=inputName]').val();
        setInputName(value);
        saveNameButton.css('display', 'block');
     });

    saveNameButton.click(handleNextStepClick);

  }

  addRatingStarsOnHtml = () => {

    const html = `
    <input type="radio" name="rate" id="rate-5" value=5>
    <label for="rate-5" class="fas fa-star"></label>
    <input type="radio" name="rate" id="rate-4" value=4>
    <label for="rate-4" class="fas fa-star"></label>
    <input type="radio" name="rate" id="rate-3" value=3>
    <label for="rate-3" class="fas fa-star"></label>
    <input type="radio" name="rate" id="rate-2" value=2>
    <label for="rate-2" class="fas fa-star"></label>
    <input type="radio" name="rate" id="rate-1" value=1>
    <label for="rate-1" class="fas fa-star"></label>
    <form class="animate-bottom" action="#">
      <header></header>
      <button type="button" class="btn btn-modal btn-form" id="saveStep">Ok</button>
    </form>
    `
    ratingContainer.html(html);
    ratingContainer.css('display', 'block');
    addSaveStepButtonListener();
    addInputRadioListener();

  }

  clearRatingStars = () => {
    ratingContainer.html('');
  }

  successMessageModal = () => {
    $('.title').html('Obrigado por nos avaliar!');
    saveNameButton.text("Baixar agora");
    saveNameButton.css('width', '150px');
    saveNameButton.css('display', 'block');
  }

  setModalQuestions = () => {
    questionCounter.html(`${step + 1}.`);
    questionDescription.html(questions[step].description);
  }

  render = async () => {
    clearRatingStars();

    if(step === 1){
      inputName.css('display', 'none');
      saveNameButton.css('display', 'none');
    }

    if(step === 5){
      //await saveFeedback();
      questionDescription.html('Baixe agora mesmo sua planilha financeira:');
      successMessageModal();
      return;
    }

    setModalQuestions();
    if(step !== 0 && step !== 5) addRatingStarsOnHtml();
  }

  addEventListeners();
});



