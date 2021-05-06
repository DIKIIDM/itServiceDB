<client_card>
  <form id="client_form" class="client_form">
      <div class="form-group row">
        <label for="input_lastname" class="col-sm-2 col-form-label">Фамилия</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="input_lastname" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="input_firstname" class="col-sm-2 col-form-label">Имя</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="input_firstname" required>
        </div>
      </div>
      <div class="form-group row">
        <label for="input_middlename" class="col-sm-2 col-form-label">Отчество</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="input_middlename">
        </div>
      </div>
      <div class="form-group row">
        <label for="input_phone" class="col-sm-2 col-form-label">Телефон</label>
        <div class="col-sm-4">
          <input type="tel" class="form-control" id="input_phone" placeholder="89211001010" pattern="^(\+7|8)\d\d\d\d\d\d\d\d\d\d$" required>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4">
          <button class="btn btn-primary" onclick="{submit}">Сохранить</button>
        </div>
      </div>
  </form>
  <style>
    @media (min-width: 576px) {
      .client_form {
        padding: 1.5rem;
        margin-right: 0;
        margin-left: 0;
        border-width: .2rem;
      }
    }
    .client_form {
      position: relative;
      padding: 1rem;
      border: solid #f7f7f9;
      border-width: .2rem 0 0;
    }
  </style>
  <script>
      let self = this;
      //--------------------------------------------------------------
      this.on('mount', function() {
          if ((typeof window !== 'undefined')) {
              var form = document.getElementById("client_form");
              function handleForm(event) { event.preventDefault(); }
              form.addEventListener('submit', handleForm);
          }
      });
      //--------------------------------------------------------------
      this.on('unmount', function() {

      });
      //--------------------------------------------------------------
      this.on('update', function(e) {
      });
      //--------------------------------------------------------------
      this.submit = async function() {
          //ищем форму
          let form = document.getElementById("client_form");
          //собираем данные для отправления
          let data = {};
          data.lastname = document.getElementById("input_lastname").value;
          data.firstname = document.getElementById("input_firstname").value;
          data.middlename = document.getElementById("input_middlename").value;
          data.phone = document.getElementById("input_phone").value;
          //проверяем
          let validity = form.checkValidity();
          if (validity === false) {

          } else {
              //отправляем на сервер
              let response = await gateway.insertClient(data);
              window.open('/',"_self");
          }
          //оповещаем что проверили
          form.classList.add('was-validated');
      }
  </script>
</client_card>
