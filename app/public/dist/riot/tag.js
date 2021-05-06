riot.tag2('client_card', '<div class="client_form"> <div class="form-group row"> <label for="input_lastname" class="col-sm-2 col-form-label">Фамилия</label> <div class="col-sm-4"> <input type="text" class="form-control" id="input_lastname" placeholder="Фамилия"> </div> </div> <div class="col-md-4"> <label for="validationCustom02" class="form-label">Фамилия</label> <input type="text" class="form-control" id="validationCustom02" value="Otto" required> <div class="valid-feedback"> <input type="text" class="form-control" id="input_lastname" placeholder="Фамилия"> </div> </div> <div class="form-group row"> <label for="input_firstname" class="col-sm-2 col-form-label">Имя</label> <div class="col-sm-4"> <input type="text" class="form-control" id="input_firstname" placeholder="Имя"> </div> </div> <div class="form-group row"> <label for="input_middlename" class="col-sm-2 col-form-label">Отчество</label> <div class="col-sm-4"> <input type="text" class="form-control" id="input_middlename" placeholder="Отчество"> </div> </div> <div class="form-group row"> <label for="input_phone" class="col-sm-2 col-form-label">Телефон</label> <div class="col-sm-4"> <input type="text" class="form-control" id="input_phone" placeholder="Телефон"> </div> </div> <div class="form-group row"> <div class="col-sm-4"> <button class="btn btn-primary" onclick="{submit}">Сохранить</button> </div> </div> </div>', '@media (min-width: 576px) { client_card .client_form,[data-is="client_card"] .client_form{ padding: 1.5rem; margin-right: 0; margin-left: 0; border-width: .2rem; } } client_card .client_form,[data-is="client_card"] .client_form{ position: relative; padding: 1rem; border: solid #f7f7f9; border-width: .2rem 0 0; }', '', function(opts) {
      let self = this;

      this.on('mount', function() {

      });

      this.on('unmount', function() {

      });

      this.on('update', function(e) {
      });

      this.submit = async function() {
          let data = {};
          data.lastname = document.getElementById("input_lastname").value;
          data.firstname = document.getElementById("input_firstname").value;
          data.middlename = document.getElementById("input_middlename").value;
          data.phone = document.getElementById("input_phone").value;
          console.log(date)

          let response = await gateway.insertClient(data);

      }
});

riot.tag2('client_list', '<div class="list_menu"> <button onclick="{add}"> add </button> </div> <table class="table"> <thead> <tr> <th scope="col">#</th> <th scope="col">firstname</th> <th scope="col">middlename</th> <th scope="col">lastname</th> </tr> </thead> <tbody> <tr each="{client, index in opts.clients}"> <th scope="row"> {index + 1}</th> <td>{client.firstname}</td> <td>{client.middlename}</td> <td>{client.lastname}</td> </tr> </tbody> </table>', 'client_list .list_menu,[data-is="client_list"] .list_menu{ height: 100px; width: 100%; background-color: #0dcaf0; }', '', function(opts) {
      let self = this;

      this.on('mount', function() {
        console.log(self.opts);
      });

      this.on('unmount', function() {

      });

      this.on('update', function(e) {
      });

      this.add = function () {
          window.open('/add_user',"_self");
      }
});
