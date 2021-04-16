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
        <th scope="col">Name</th>
        <th scope="col">Age</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ client, index in opts.clients}>
        <th scope="row"> {index + 1}</th>
        <td>{client.name}</td>
        <td>{client.age}</td>
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
      this.add = function () {
          window.open('/add_user',"_self");
      }
  </script>
</client_list>
