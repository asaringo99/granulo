<script lang="ts"></script>

<style>
  /* 力を受けて移動しながら揺れるアニメーション */
  @keyframes force-motion {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 1;
    }
    20% {
      transform: translate(300%, -200%) rotate(10deg);
    }
    40% {
      transform: translate(-240%, 210%) rotate(-15deg);
    }
    60% {
      transform: translate(180%, -270%) rotate(10deg) scale(1.1);
    }
    80% {
      transform: translate(-300%, 180%) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg) scale(1);
      opacity: 1;
    }
  }

  .particle {
    @apply w-1 h-1 bg-black absolute rounded-full;
    top: 50%;
    left: 50%;
    transform-origin: center;
    animation: force-motion 2.5s infinite ease-in-out;
  }

  /* 各粒子に異なるアニメーション遅延を設定 */
  .particle:nth-child(1) {
    animation-delay: 0s;
  }
  .particle:nth-child(2) {
    animation-delay: 0.3s;
  }
  .particle:nth-child(3) {
    animation-delay: 0.6s;
  }
  .particle:nth-child(4) {
    animation-delay: 0.9s;
  }
</style>

<div class="relative w-20 h-20 rounded-full overflow-hidden group">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>
