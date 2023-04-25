<template>
  <div class="vh-100 vw-100 d-flex flex-column">

    <nav class="navbar navbar-expand-xl navbar-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Jolo Cansana</RouterLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse show" id="navbarBasic">
          <ul class="navbar-nav ms-auto mb-2 mb-xl-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="flex-fill d-flex">

      <div class="col-6 content h-100 d-flex align-items-center justify-content-end px-5 text-center">
        <div class="bg-white">
          <div class="p-5">
            <img src="../assets/portrait.png" alt="portrait" class="rounded-circle crop-portrait">
            <h2>Jolo Cansana</h2>
            <span>Data Practitioner</span>
          </div>

          <div class="bg-secondary w-100 py-2">
            Subs
          </div>
        </div>
      </div>

      <div class="col-6 h-100 d-flex flex-column justify-content-center px-5">
        <h1>Hi 👋</h1>
        <div class="d-block my-3">
          <RouterLink to="/resume" class="btn btn-primary">Resume</RouterLink>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos amet accusamus mollitia cumque incidunt, ab atque aliquid reiciendis neque ipsa veritatis nulla corporis at rerum repellat ut consequatur tempora sapiente asperiores officia aut. Libero animi, velit hic laborum possimus deserunt. Atque impedit sapiente officia quis ullam natus doloribus eos nobis?
        </p>
      </div>
    </div>

    <div class="footer d-flex p-3">
      <div class="col-6 d-flex align-items-end">Jolo Cansana</div>
      <div class="col-6 d-flex justify-content-end">
        
        <div class="d-flex flex-column text-center ms-5">
          <b>Header</b>
          <span>Subheader Content</span>
        </div>

        <div class="d-flex flex-column text-center ms-5">
          <b>Header</b>
          <span>Subheader Content</span>
        </div>

        <div class="d-flex flex-column text-center ms-5">
          <b>Header</b>
          <span>Subheader Content</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.content {
  background-color: rgb(255, 205, 182);
}

.crop-portrait{
  width: 200px;
  height: 200px;
}
</style>