
let count = 0;

// グーボタン
$(".aa").on("click", function () {

  // 5回クリアリセット
  if (count === 0){
    $(".c").html("");
    $(".d").html("");
  }
 
  var random = Math.floor(Math.random() * 3);
  console.log(random, "ランダムな数字");

  if (random === 0) {
    console.log("グー");
    $(".a").html('<img src="./img/じゃんけんグー.jpg" alt="グー">');
    $(".b").html("あいこ");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });
  } else if (random === 1) {
    console.log("チョキ");
    $(".a").html('<img src="./img/じゃんけんチョキ.jpg" alt="チョキ">');
    $(".b").html("勝ち");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });

    count++;

    console.log("勝利回数:", count);
  
    // 5回勝利でクリア
    if (count === 5) {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
      $(".d").html("頑張ったね！");
      count = 0;
    } else {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
    }

    // コインの大きさを設定
    $(".c img").css({
      "width" : "40px",
      "height": "auto",
    })

    // コインを中央に配置
    $(".c").css({
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    })

  } else if (random === 2) {
    console.log("パー");
    $(".a").html('<img src="./img/じゃんけんパー.jpg" alt="パー">');
    $(".b").html("負け");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });
  }
  });

// チョキボタン
$(".bb").on("click", function () {
  
  // 5回クリアリセット
  if (count === 0){
    $(".c").html("");
    $(".d").html("");
  }

  var random = Math.floor(Math.random() * 3);
  console.log(random, "ランダムな数字");

  if (random === 0) {
    console.log("グー");
    $(".a").html('<img src="./img/じゃんけんグー.jpg" alt="グー">');
    $(".b").html("負け");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });
  } else if (random === 1) {
    console.log("チョキ");
    $(".a").html('<img src="./img/じゃんけんチョキ.jpg" alt="チョキ">');
    $(".b").html("あいこ");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });
  } else if (random === 2) {
    console.log("パー");
    $(".a").html('<img src="./img/じゃんけんパー.jpg" alt="パー">');
    $(".b").html("勝ち");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });

    count++;

    console.log("勝利回数:", count);

    // 5回勝利でクリア
    if (count === 5) {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
      $(".d").html("頑張ったね！");
      count = 0;
    } else {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
    }

    // コインの大きさを設定
    $(".c img").css({
      "width" : "40px",
      "height": "auto",
    })

    // コインを中央に配置
    $(".c").css({
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    })

  }
  });

// パーボタン
  $(".cc").on("click", function () {

  // 5回クリアリセット
  if (count === 0){
    $(".c").html("");
    $(".d").html("");
  }

  var random = Math.floor(Math.random() * 3);
  console.log(random, "ランダムな数字");

  if (random === 0) {
    console.log("グー");
    $(".a").html('<img src="./img/じゃんけんグー.jpg" alt="グー">');
    $(".b").html("勝ち");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });

    count++;

    console.log("勝利回数:", count);

    // 5回勝利でクリア
    if (count === 5) {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
      $(".d").html("頑張ったね！");
      count = 0;
    } else {
      $(".c").append('<img src="./img/コイン.webp" alt="コイン">');
    }

    // コインの大きさを設定
    $(".c img").css({
      "width" : "40px",
      "height": "auto",
    })

    // コインを中央に配置
    $(".c").css({
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    })

  } else if (random === 1) {
    console.log("チョキ");
    $(".a").html('<img src="./img/じゃんけんチョキ.jpg" alt="チョキ">');
    $(".b").html("負け");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });
  } else if (random === 2) {
    console.log("パー");
    $(".a").html('<img src="./img/じゃんけんパー.jpg" alt="パー">');
    $(".b").html("あいこ");
    $(".kumamon").css("flex-direction","row")
    $(".a").css({
      "overflow" : "hidden"
    });
    $(".a img").css({
      "width": "76px",
      "height": "auto"
    });
  }
  });