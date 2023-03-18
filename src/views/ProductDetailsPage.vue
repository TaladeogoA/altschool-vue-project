<template>
  <section v-if="product" class="page-container">
    <p class="nav-to-prev">Home > Products > {{ product.category }}</p>
    <div class="product-details">
      <div class="product-images">
        <div class="current-image">
          <img :src="currentImage" alt="Product Image" />
        </div>

        <div class="thumbnails-container">
          <div
            class="product-thumbnail"
            v-for="(image, index) in product.images"
            :key="index"
            :class="{ active: currentImageIndex === index }"
            @click="setCurrentImageIndex(index)"
          >
            <img :src="image" alt="Product Thumbnail" />
          </div>
        </div>
      </div>

      <div class="product-info">
        <p class="brand">
          Brand:
          <a href="#">
            {{ product.brand }}
          </a>
        </p>

        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>

        <div class="rating">
          <span v-for="star in stars" :key="star" class="star">{{ star }}</span>

          <span class="rating-count">
            ({{ product.rating }} verified ratings)
          </span>
        </div>

        <hr />

        <div class="price">
          <p class="discounted-price">$ {{ product.roundedPrice }}</p>
          <div>
            <p class="original-price">$ {{ product.price }}.00</p>
            <span>- {{ product.discountPercentage }}% </span>
          </div>
        </div>

        <p class="stock" v-if="product.stock < 40">Few units left</p>

        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </section>

  <div v-else>
    <h1>Product not found</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      currentImageIndex: 0,
    };
  },

  computed: {
    ...mapGetters(["getProduct"]),

    product() {
      return this.getProduct;
    },

    currentImage() {
      return this.product.images[this.currentImageIndex];
    },

    stars() {
      const rating = this.product.rating;
      const fullStars = Math.floor(rating);
      const halfStars = Math.ceil(rating - fullStars);
      const emptyStars = 5 - fullStars - halfStars;

      return [
        ...Array(fullStars).fill("★"),
        ...Array(halfStars).fill("☆"),
        ...Array(emptyStars).fill("☆"),
      ];
    },
  },

  methods: {
    ...mapActions(["fetchProductById"]),

    setCurrentImageIndex(index) {
      this.currentImageIndex = index;
    },
  },

  created() {
    const id = this.$route.params.id;
    this.fetchProductById(id);
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  margin: 0 1rem;
  margin-top: 6rem;
}
.product-details {
  display: flex;
  justify-content: center;

  .product-images {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    margin-right: 2rem;

    .current-image {
      flex: 1 1 100%;
      margin-bottom: 2rem;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .thumbnails-container {
      display: flex;
      flex-wrap: wrap;

      .product-thumbnail {
        flex: 0 0 20%;
        margin-right: 1rem;
        cursor: pointer;

        img {
          max-width: 100%;
          height: auto;
        }

        &.active {
          border: 2px solid #333;
        }
      }
    }
  }

  .product-info {
    width: 50%;

    .brand {
      font-size: 1rem;
      margin: 0.5rem 0;

      a {
        color: #333;
        display: inline-block;

        &:hover {
          text-decoration: none;
        }
      }
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin: 0;
    }

    .rating {
      display: flex;
      align-items: center;
      margin: 1rem 0;

      .star {
        color: #ffc107;
        font-size: 20px;
      }

      .rating-count {
        font-size: 0.8rem;
        margin-left: 0.5rem;
      }
    }

    hr {
      margin: 1rem 0;
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .discounted-price {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
      }

      div {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;

        .original-price {
          font-size: 1.2rem;
          margin: 0;
          text-decoration: line-through;
        }

        span {
          font-size: 1rem;
          margin-left: 0.5rem;
          background-color: rgba(87, 87, 87, 0.7);
          color: #fff;
          padding: 0.2rem 0.4rem;
          border-radius: 0.2rem;
        }
      }
    }

    .stock {
      font-size: 0.8rem;
      color: #b90000;
      margin: 0.5rem 0;
    }

    .add-to-cart {
      margin: 1rem 0;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.7);
      transition: all 0.5s ease-in-out;
      outline: none;
      font-size: 1rem;
      line-height: 2.2rem;
      border-radius: 3rem;
      background: transparent;
      font-weight: 300;
      letter-spacing: 0;

      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .product-images {
      width: 100%;
      margin-right: 0;

      .current-image {
        flex: 1 1 100%;
        margin-bottom: 2rem;
      }

      .thumbnails-container {
        flex: 1 1 100%;
        margin-bottom: 2rem;
      }
    }

    .product-info {
      width: 100%;
    }
  }
}
</style>
