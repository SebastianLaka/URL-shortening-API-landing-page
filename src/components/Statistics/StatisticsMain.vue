<script setup lang="ts">
import { ref } from 'vue'
import StatisticsCard from './StatisticsCard.vue'
import StatisticIcon from '../ReuseableComponents/Image.vue'
import StatisticRecognition from '../icons/icon-brand-recognition.svg'
import StatisticRecords from '../icons/icon-detailed-records.svg'
import StatisticCustomizable from '../icons/icon-fully-customizable.svg'

const statisticsFeatures = ref([
  {
    id: 1,
    className: 'recognition',
    icon: StatisticRecognition,
    alt: 'Icon for statistic brand recognition content',
    header: 'Brand Recognition',
    description:
      ' Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. ',
  },
  {
    id: 2,
    className: 'records',
    icon: StatisticRecords,
    alt: 'Icon for detailed records statistic content',
    header: 'Detailed Records',
    description:
      ' Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    id: 3,
    className: 'customizable',
    icon: StatisticCustomizable,
    alt: 'Icon for fully customizable content',
    header: ' Fully Customizable',
    description:
      ' Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
])
</script>
<template>
  <section class="statistics-main">
    <div class="statistics-header">
      <h1 class="statistics-header__header-title">Advanced Statiscits</h1>
      <p class="statistics-header__content">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
    </div>
    <div class="statistics-cards-box">
      <StatisticsCard
        v-for="statisticsFeature in statisticsFeatures"
        :key="statisticsFeature.id"
        :item="statisticsFeature"
        class="statistics-features"
        :class="`statistic-feature-${statisticsFeature.className}`"
      >
        <template #default>
          <div
            class="statistic-features-icon-box"
            :class="`statistic-features-icon-box-${statisticsFeature.className}`"
          >
            <StatisticIcon
              :src="statisticsFeature.icon"
              :alt="statisticsFeature.alt"
              class="statistic-features-icon-box__icon"
            />
          </div>

          <h1 class="statistics-features__feature-header">{{ statisticsFeature.header }}</h1>
          <p class="statistics-features__feature-content">{{ statisticsFeature.description }}</p>
        </template>
      </StatisticsCard>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use 'sass:map';
@use '../../assets/scss/colors.scss' as *;
@use '../../assets/scss/fonts.scss' as *;
@use '../../assets/scss/mixins.scss' as *;
@use '../../assets/scss/breakpoints.scss' as *;
.statistics-main {
  @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
  @include set-gap(4.75em, 0);
  padding: 0 1em;
  .statistics-header {
    text-align: center;
    &__content {
      max-width: 30ch;
      padding-top: 0.75em;
    }
  }
  .statistics-cards-box {
    @include flex-layout($flex-direction: column);
    @include set-gap(5em, 0);
    .statistics-features {
      @include flex-layout($flex-direction: column, $justify-content: center, $align-items: center);
      @include set-gap(1.75em, 0);
      text-align: center;
      @include position-element($position: relative, $z-index: 0);
      &::before {
        content: '';
        @include position-element(
          $position: absolute,
          $bottom: 0,
          $top: -10%,
          $right: 48.75%,
          $z-index: -10
        );
        background-color: $blue-400;
        width: 0.4em;
        height: 25%;
      }
      &:first-child {
        &.statistics-features::before {
          visibility: hidden;
        }
      }
      .statistic-features-icon-box {
        background-color: $purple-950;
        border-radius: 50%;
        padding: 1em;
        &__icon {
          width: 2.75em;
          height: 2.75em;
        }
      }
      &__feature-content {
        max-width: 28ch;
      }
    }
  }
}
@media (min-width: $desktop-small) {
  .statistics-main {
    .statistics-header {
      &__content {
        font-size: $basic-size;
        max-width: 45ch;
        justify-self: center;
      }
    }
    .statistics-cards-box {
      @include grid-layout($columns: 12);
      grid-template-rows: repeat(2, 1fr);
      .statistics-features {
        @include set-gap(1em, 0);
        justify-content: start;
        &::before {
          right: 49.5%;
        }
        &__feature-header {
          font-size: calc($primary-size + 0.375rem);
        }
        &__feature-content {
          font-size: $basic-size;
        }
      }
      .statistic-feature-recognition {
        @include grid-child(1, 7);
      }
      .statistic-feature-records {
        @include grid-child(7, 13);
        &::before {
          left: 35%;
          top: 12.5%;
          min-width: 10%;
          height: 0.5em;
        }
      }
      .statistic-feature-customizable {
        @include grid-child(5, 9);
        grid-row: 2/2;
        &::before{
          left: 49.25%;
        }
      }
    }
  }
}
@media (min-width: $desktop-wide) {
  .statistics-main {
    padding: 0;
    align-items: normal;
    .statistics-cards-box {
      .statistics-features {
        &__feature-content {
          max-width: 35ch;
        }
      }
      .statistic-feature-recognition {
        @include grid-child(1, 7);
      }
      .statistic-feature-records {
        @include grid-child(7, 13);
         &::before{
          left: 40%;
         }
      }
      .statistic-feature-customizable {
        @include grid-child(5, 9);
      }
    }
  }
}
@media (min-width: $desktop-ultra-wide) {
  .statistics-main {
    padding: 0;
    .statistics-cards-box {
      grid-template-rows: repeat(1, 1fr);
      .statistics-features {
        justify-content: start;
        align-items: start;
        text-align: left;
        &::before {
          left: -22%;
          top: 48%;
          min-width: 10%;
          height: 0.5em;
        }
        &__feature-content {
          width: 30ch;
        }
        .statistic-features-icon-box {
          margin-bottom: 1em;
        }
      }
      .statistic-feature-recognition {
        @include grid-child(3, 5);
      }
      .statistic-feature-records {
        @include grid-child(6, 9);
        margin-top: 2.75em;
        justify-self: center;
      }
      .statistic-feature-customizable {
        @include grid-child(9, 12);
        grid-row: 1/1;
        margin-top: 5.5em;
        justify-self: end;
        &::before {
          top: 40%;
        }
      }
    }
  }
}
</style>
