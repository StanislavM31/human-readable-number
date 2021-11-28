module.exports = function toReadable (number) {
    let mas = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'hundred'
    ]

    let mas_10_15 = [
        'teen'
/*         'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen' */
    ]
    let number_as_string = number.toString.length;

    switch (number_as_string) {
        case 1:
            let x = 0;
            if (number == 0){
            return "zero";
            } else
            for (let i=1; i<10; i++){
                if (i == number) {
                    x=i;
                    return mas[i++];
                 }
                }
        case 2:
            if (number == 10) {
                return 'ten';
            } 
            else if (number == 11) {
                return 'eleven';
            }
            else if (number == 12) {
                return 'twelve';
            }
            else if (number == 13) {
                return 'thirteen';
            }
            else if ( number == 14) {
                return 'fourteen';
            }
            else if (number == 15) {
                return 'fifteen';
            }
            else if (number == 16) {
                return 'six' + mas_10_15[0];
            }
            else if (number == 17) {
                return 'seven' + mas_10_15[0];
            }
            else if (number == 18) {
                return 'eigh' + mas_10_15[0];
            }
            else if (number == 19) {
                return 'nine' + mas_10_15[0];
            }
            else if (number == 20) {
                return 'twenty';
            }
            let x1 = number_as_string[0];
            let x2 = number_as_string[1];
        case 3:
            return 'one hundred';
        default: 
            return 'i dont know';

    }



}

 