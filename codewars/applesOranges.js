<script>
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s_temp = readLine().split(' ');
    var houseStart = parseInt(s_temp[0]);
    var houseEnd = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var appLoc = parseInt(a_temp[0]);
    var orLoc = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var appleCt = parseInt(m_temp[0]);
    var orangCt = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);


for(var x = 0; x < apple.length; x ++){


}

}
</script>
