//x~y之间的随机整数
function randomInteger(x, y) {
    var max = Math.max(x, y);
    var min = Math.min(x, y);

    var n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}


// 5. 利用递归求两个数字的最大公约数——欧里几德算法，辗转相除法。
function GCD(m, n) {
    var r = m % n;
    m = n;
    n = r;
    if (r === 0) {
        return m;
    }
    return fn(m, n);
}
console.log(fn(12, 16))


function gcd(m, n) {
    if (n === 0) {
        return m;
    }
    var r = m % n;
    return gcd(n, r);
}
console.log(gcd(12, 56));
//最小公倍数
function LCM(n1, n2) {
    return (n1 * n2) / gcd(n1, n2);
}


//冒泡排序(相邻元素两两比较)
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; i++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//选择排序
//求一组值得最小值，可以设置一个很大的值为最小值，和其他的值进行比较
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i; //假设最小值的索引
        var minValue = arr[i]; //假设的最小值
        // 核心：最小值得索引就是最小值
        for (var j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < minValue) {
                // 若当前的值比假设的值还要小，将当前的直到赋值给最小值
                minIndex = j;
                minValue = arr[j];
            }
        }
        //循环结束找到最小值
        if (minIndex !== i) { //假设不成立，交换位置
            var temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}


// 数组去重
var newArr = arr.reduce(function(prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur);
    return prev;
}, []);

function unique(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        var flag = 1;
        //检测
        for (var j = 0; j < newArray.length; j++) { //新数组
            //arr[i]:待去重的数组的第一项。
            if (arr[i] === newArray[j]) { //满足条件说明新数组存在，不要了arr[i]。
                flag = 2;
            }
        }
        //等待检测的结果。
        if (flag === 1) {
            newArray.push(arr[i]); //12
        }
    }
    return newArray;
}

function unique2(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) { //j=1;j=2;
                arr.splice(j, 1); //截取,改变数组的长度。
                j--; //每删除一个值，j--缓冲j++;
            }
        }
    }
}

function unique3(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArray.indexOf(arr[i]) === -1) { //如果条件成立，新数组里面就没有当前的arr[i]
            newArray.push(arr[i]); //添加进新数组。
        }
    }
    return newArray;
}

function unique4(arr) {
    var newArray = arr.filter(function(item, index, arr) {
        return arr.indexOf(item) === index;
    })
    return newArray;
}