<template>
  <div
    class="
      min-w-screen
      max-w-full
      overflow-x-hidden
      min-h-screen
      flex flex-col
      bg-yellow-300
      text-lg
    "
  >
    <Heading />
    <div
      class="
        flex flex-col-reverse
        md:flex-row
        items-center
        gap-12
        mt-14
        md:mt-28
        relative
      "
    >
      <div class="flex flex-1 flex-col p-2 gap-1 md:gap-3 md:mt-20">
        <p class="text-3xl sm:text-7xl text-yellow-900 text-opacity-90">
          Discover The Amazing
        </p>
        <p
          class="text-3xl sm:text-7xl text-yellow-900 text-opacity-90 font-thin"
        >
          Unique Places.
        </p>
        <p class="font-thin text-yellow-900 text-opacity-90 mt-3">
          Discover the happiest moment of life and seek the most charming
          scenery.
        </p>
        <button
          type="submit"
          class="
            p-1
            sm:p-2
            shadow
            md:shadow-lg
            rounded-full
            text-white
            bg-red-600
            w-[12rem]
            mt-2
            ml-4
            hover:bg-red-500 hover:shadow-md
          "
        >
          Get Started
        </button>
      </div>
      <div
        class="
          flex
          justify-center
          flex-1
          sm:mb-10
          lg:items-start
          max-w-[calc(100%-1rem)]
          z-10
        "
      >
        <img
          src="../static/amani-nation-LTh5pGyvKAM-unsplash.jpg"
          alt="Nairobi"
          class="
            w-4/5
            h-4/5
            sm:w-3/4 sm:h-3/4
            md:w-full md:h-full md:mr-4
            rounded
            md:rounded-tl-3xl md:rounded-br-3xl
          "
        />
      </div>
      <div
        class="
          hidden
          md:block
          overflow-hidden
          bg-orange-500
          rounded-xl
          absolute
          -right-4
          bottom-2
          w-1/2
          h-80
        "
      ></div>
    </div>
    <div
      class="
        sticky
        bottom-0
        w-full
        flex flex-col
        items-center
        font-thin
        sm:mt-2
      "
    >
      <p class="text-orange-900">
        &copy; {{ 1900 + new Date().getYear() }}. Made by
        <a
          href="https://werux.vercel.app"
          class="text-red-500 hover:bg-red-600 hover:text-white"
          >Waweru</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
