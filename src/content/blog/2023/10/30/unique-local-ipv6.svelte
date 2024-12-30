<script lang="ts">
  function random_hex(len: number, pad: boolean = false) {
    let v = Math.floor(Math.random() * Math.pow(16, len)).toString(16);
    return pad ? ("0000" + v).slice(-len) : v;
  }

  function random_ipv6() {
    return ["fd" + random_hex(2, true), random_hex(4), random_hex(4)].join(":");
  }

  let ipv6prefix: string = random_ipv6();
</script>

<h1>Unique Local IPv6</h1>

<button on:click={() => (ipv6prefix = random_ipv6())}>Generate</button>

<h2>64-bit subnetting</h2>

<table>
  <thead>
    <tr>
      <th>Prefix:</th>
      <th>{ipv6prefix}::/48</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>First subnet:</td>
      <td>{ipv6prefix}::/64</td>
    </tr>
    <tr>
      <td>Last subnet:</td>
      <td>{ipv6prefix}:ffff::/64</td>
    </tr>
  </tbody>
</table>
