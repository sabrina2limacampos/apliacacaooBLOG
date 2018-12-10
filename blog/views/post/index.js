/*<% include ../header %></td>
<header>
<h2>BLOG</h2>
</header>

<form action="/post" method="post">
<input type="text" name="post[descricao]" placeholder="Descricao">
<input type="text" name="post[data]" placeholder="Data">
<button type="submit">Cadastrar</button>
</form>
<table>
<thead>
<tr>
<th>Nome</th>
<th>E-mail</th>
<th>Ação</th>
</tr>
</thead>
<tbody>
<% posts.forEach(function(post, index) { %>
<tr>
<td><%- post.descricao %></td>
<td><%- post.data %></td>
<td>
<a href="/post/<%- index %>">Detalhes</a>
</td>
</tr>
<% }) %>
</tbody>
</table>*

<% include ../footer %>*/