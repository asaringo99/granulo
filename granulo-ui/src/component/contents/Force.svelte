<script lang="ts"></script>

<style>
  /* 左から右に進む矢印の動き (90度回転・高速化) */
  @keyframes arrow-move {
    0% {
      transform: translateX(-200%) rotate(90deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(200%) rotate(90deg);
      opacity: 0;
    }
  }

  .arrow {
    @apply w-1 h-1 border-l-4 border-r-4 border-b-8 border-transparent border-b-black;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) rotate(90deg); /* 初期位置で90度回転 */
    animation: arrow-move 0.8s infinite linear; /* スピードアップ */
  }
</style>

<div class="relative w-20 h-20 overflow-hidden">
  <div class="arrow"></div>
</div>
