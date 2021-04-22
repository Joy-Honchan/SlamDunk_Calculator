//可能遇到的問題1.字串太長2.按下=後會接續後面的計算 想要按下等號後 另新成立新算式 
// 3.想在新算式建立時 運算鍵只能按'-' 其他會出現警語 4.不可以連續按運算鍵
var temp = '';
var suansu = [];
var finalcal;

//輸入數字的function
function getvalue(nb) {
    if (document.getElementById('tensai') != null) {
        //要重新操作時 把跑來跑去的櫻木去掉
        document.getElementById('tensai').src = '';
    }
    // 模擬實體計算機只能輸入符合螢幕為止的字串長度
    if (temp.length > 11) {
        nb = '';
    }
    //如果輸入多個零 但只要顯示一次
    if (temp == '' && nb == 0) {

        document.getElementById('result').innerText = "0";
    } else {
        temp += nb;
        console.log(temp);
        document.getElementById('result').innerText = temp;
    }


}

//輸入運算子
function getcal(smb) {
    suansu.push(temp);
    suansu.push(smb);
    // console.log(suansu.length);

    if (suansu[0] == '' && suansu[1] != '-') {
        document.getElementById('result').innerText = '';
        document.getElementById('pre').innerText = '要先輸入數字喔 請按AC後重新開始';
    } else {

        //不讓pre顯示的算式超出去
        if (suansu.join('').length >= 40) {
            document.getElementById('pre').innerText = `${suansu.join('').slice(0, 40)}...`;

        } else {
            document.getElementById('pre').innerText = suansu.join('');

        }
        document.getElementById('result').innerText = smb;
    }

    // console.log(suansu);
    // console.log(suansu.join(''));

    //清空顯示數字 所以下次輸入不會留之前的字
    temp = '';
}

function byebye() {
    // 刪除前一位=取最後一位除外的顯示
    temp = temp.slice(0, (temp.length - 1));
    document.getElementById('result').innerText = temp;

}

function byeall() {
    temp = '';
    suansu = [];
    document.getElementById('result').innerText = temp;
    document.getElementById('pre').innerText = '試著算出1031';


}

function getequal() {
    suansu.push(temp);
    finalcal = eval(suansu.join('')).toString();
    // console.log(finalcal);
    // console.log(finalcal.length);
    // console.log(finalcal.slice(0, 12));
    //超出螢幕可顯示範圍 用...表示
    if (finalcal.length >= 12) {
        document.getElementById('result').innerText = `${finalcal.slice(0, 12)}...`;

    } else {
        document.getElementById('result').innerText = finalcal;
    }
    //隨機跑出名言
    var a = Math.floor(Math.random() * 4);
    switch (a) {
        case 0:
            document.getElementById('pre').innerHTML = '現在放棄，就等於比賽提前結束';

            break;
        case 1:
            document.getElementById('pre').innerHTML = '還不到慌張的時候';

            break;
        case 2:
            document.getElementById('pre').innerHTML = '控制了籃板，就控制了比賽';

            break;
        case 3:
            document.getElementById('pre').innerHTML = '教練...我想打籃球...';

            break;

        default:
            document.getElementById('pre').innerHTML = '控制了籃板，就控制了比賽';

            break;
    }

    if (finalcal == 1031) {
        easteregg()
    }
    //之後再按就會重頭開始計算 把暫存的數跟陣列都清空
    temp = '';
    suansu = [];
}