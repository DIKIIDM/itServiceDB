<client_card>
  <div class="client_form">
      <div class="form-group row">
        <label for="input_lastname" class="col-sm-2 col-form-label">Фамилия</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="input_lastname" placeholder="Фамилия">
        </div>
      </div>
      <div class="form-group row">
        <label for="input_firstname" class="col-sm-2 col-form-label">Имя</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="input_firstname" placeholder="Имя">
        </div>
      </div>
      <div class="form-group row">
        <label for="input_middlename" class="col-sm-2 col-form-label">Отчество</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="input_middlename" placeholder="Отчество">
        </div>
      </div>
      <div class="form-group row">
        <label for="input_phone" class="col-sm-2 col-form-label">Телефон</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" id="input_phone" placeholder="Телефон">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-4">
          <button class="btn btn-primary" onclick="{submit}">Сохранить</button>
        </div>
      </div>
  </div>

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
      //--------------------------------------------------------------
      this.on('mount', function() {

      });
      //--------------------------------------------------------------
      this.on('unmount', function() {

      });
      //--------------------------------------------------------------
      this.on('update', function(e) {
      });
      //--------------------------------------------------------------
      this.submit = function() {
          console.log("test");
      }
  </script>
</client_card>
