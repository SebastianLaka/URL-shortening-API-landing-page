<script setup lang="ts">
import { ref } from 'vue'
import LogoIcon from '@/components/icons/logo.svg'
import TwitterIcon from '@/components/icons/icon-twitter.svg'
import FacebookIcon from '@/components/icons/icon-facebook.svg'
import PrinterestIcon from '@/components/icons/icon-pinterest.svg'
import InstagramIcon from '@/components/icons/icon-instagram.svg'
import FooterLogo from '@/components/ReuseableComponents/Logo.vue'
import FooterIcon from '@/components/ReuseableComponents/Icon.vue'
import FooterNav from '@/components/Footer/FooterNavigation.vue'

const footerNavs = ref([
  {
    id: 1,
    header: 'Features',
    items: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    id: 2,
    header: 'Resources',
    items: ['Blog', 'Developers', 'Support'],
  },
  {
    id: 3,
    header: 'Company',
    items: ['About', 'Our Team', 'Careers', 'Contact'],
  },
])

const footerIcons = ref([
  { id: 1, src: TwitterIcon, alt: 'Twitter Icon' },
  { id: 2, src: FacebookIcon, alt: 'Facebook Icon' },
  { id: 3, src: PrinterestIcon, alt: 'Printerest Icon' },
  { id: 4, src: InstagramIcon, alt: 'Instagram Icon' },
])
</script>

<template>
  <footer class="footer-main">
    <FooterLogo :src="LogoIcon" class="footer-main__logo" />
    <div class="footer-navigations">
      <FooterNav
        v-for="footerNav in footerNavs"
        :key="footerNav.id"
        :nav-item="footerNav"
        class="footer-navigation"
      >
        <h2 class="footer-navigation__title">{{ footerNav.header }}</h2>
        <ul class="footer-navigation-list">
          <li
            v-for="(item, index) in footerNav.items"
            :key="index"
            class="footer-navigation-list__item"
          >
            <a href="#" class="footer-navigation-list__item--link">{{ item }}</a>
          </li>
        </ul>
      </FooterNav>
    </div>
    <div class="footer-icons">
      <FooterIcon
        v-for="footerIcon in footerIcons"
        :id="footerIcon.id"
        :src="footerIcon.src"
        :alt="footerIcon.alt"
        :item="footerIcon"
        class="footer-icons__icon"
      />
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets/scss/breakpoints.scss' as *;
.footer-main {
  @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
  @include set-gap(2.5em, 0);
  padding: 2.5em;
  background-color: $gray-950;
  margin-top: -6em;
  &__logo {
    filter: invert(1) brightness(1000%);
  }
  .footer-navigations {
    @include flex-layout($flex-direction: column);
    @include set-gap(1.75em, 0);
    .footer-navigation {
      @include flex-layout($flex-direction: column, $justify-content: center);
      @include set-gap(1em, 0);
      text-align: center;
      &__title {
        color: $white-0;
        font-size: calc($primary-size + 0.375em);
      }
      .footer-navigation-list {
        @include flex-layout($flex-direction: column);
        @include set-gap(0.5em, 0);
        &__item {
          padding: 0.1em;
          font-size: $primary-size;
          &--link {
            text-decoration: none;
            color: $gray-500;
            transition: color 0.3s ease-in-out;
            &:hover {
              color: $blue-400;
            }
          }
        }
      }
    }
  }
  .footer-icons {
    @include flex-layout();
    @include set-gap(0, 1em);
    &__icon {
      width: 2em;
      height: 2em;
      cursor: pointer;
      transition: filter 0.1s ease-in-out;
      &:hover {
       filter: brightness(0) saturate(100%) invert(72%) sepia(47%) saturate(986%) hue-rotate(130deg) brightness(94%) contrast(88%);
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .footer-main {
    @include grid-layout($columns: 12);
    justify-content: start;
    align-items: start;
    padding: 3em 1em;
    &__logo {
      @include grid-child(1, 2);
    }
    .footer-navigations {
      @include grid-child(4, 9);
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      @include set-gap(0, 2.75em);
      .footer-navigation {
        text-align: left;
        &__title {
          font-size: $primary-size;
        }
        .footer-navigation-list {
          &__item {
            font-size: $basic-size;
          }
        }
      }
    }
    .footer-icons {
      @include grid-child(10, -1);
      @include set-gap(0, 1.25em);
      justify-content: flex-end;
    }
  }
}
@media (min-width: $desktop-wide) {
  .footer-main {
    padding: 3em 0;
    &__logo {
      @include grid-child(2, 3);
    }
    .footer-navigations {
      @include grid-child(5, 9);
    }
    .footer-icons {
      @include grid-child(10, 12);
    }
  }
}
@media (min-width: $desktop-ultra-wide) {
  .footer-main {
    &__logo {
      @include grid-child(3, 4);
    }
    .footer-navigations {
      @include grid-child(5, 9);
      @include set-gap(0, 3em);
      justify-content: flex-end;
    }
    .footer-icons {
      @include grid-child(9, 11);
    }
  }
}
</style>
