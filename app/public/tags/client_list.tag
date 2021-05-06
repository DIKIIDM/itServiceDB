<client_list>
  <div class="list_menu">
    <button onclick="{add}">
      add
    </button>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">firstname</th>
        <th scope="col">middlename</th>
        <th scope="col">lastname</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ client, index in clients}>
        <th scope="row"> {index + 1}</th>
        <td>{client.firstname}</td>
        <td>{client.middlename}</td>
        <td>{client.lastname}</td>
      </tr>
    </tbody>
  </table>
  <style>
    .list_menu {
      height: 100px;
      width: 100%;
      background-color: #0dcaf0;
    }
  </style>
  <script>
      let self = this;
      //--------------------------------------------------------------
      this.on('mount', function() {
          if (self.opts.clients) {
              let clients = JSON.parse(self.opts.clients.replace(/&quot;/g,'"'));
              self.update({clients: clients});
          }
      });
      //--------------------------------------------------------------
      this.on('unmount', function() {

      });
      //--------------------------------------------------------------
      this.on('update', function(e) {
      });
      //--------------------------------------------------------------
      this.add = function () {
          window.open('/add_user',"_self");
      }
  </script>
</client_list>
