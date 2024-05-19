<script>
  import CopyClipBoard from './CopyClipBoard.svelte';

  let text = 'npx logger-boilerplate';

  const copyToClipboard = () => {
    const app = new CopyClipBoard({
      target: document.getElementById('clipboard'),
      props: { text },
    });
    app.$destroy();
  };
</script>

<div>
  <div class="input-container">
    <input class="input" name="text" type="text" bind:value={text} disabled />
    <button class="btn-copy" on:click={copyToClipboard}>copy</button>
    <div id="clipboard"></div>
  </div>
</div>

<style>
  .input-container {
    position: relative;
    box-shadow: 7px 7px 0px 0px #0b2447;
    transition: all 0.5s;
    outline: none;
    border: 2px solid #0b2447;
    margin: 0 10px;
  }

  .input {
    height: 40px;
    padding: 10px;
    background: transparent;
    border: none;
    font-size: 32px;
    font-weight: bold;
  }

  .btn-copy {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    outline: none;
    border: none;
    text-transform: uppercase;
    background-color: rgba(157, 236, 249, 0.16);
  }

  .btn-copy:hover {
    scale: 1.1;
    background-color: rgba(84, 157, 168, 0.16);

    color: #00ffff;
  }

  @media (width<768px) {
    .input {
      font-size: 24px;
    }
  }
</style>
