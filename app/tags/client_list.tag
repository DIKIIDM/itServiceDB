<client_list>
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
  <script>
  </script>
</client_list>
