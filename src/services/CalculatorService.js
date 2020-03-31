class CalculatorService{

    constructor() {
       
    }

    isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    clean(array) {
        for(var i = 0; i < array.length; i++) {
            if(array[i] === "") {
                array.splice(i, 1);
            }
        }
        return this;
    }

    infixToPostfix(infix) {
        var outputQueue = "";
        var operatorStack = [];
        var operators = {
            "^": {
                precedence: 4,
                associativity: "Right"
            },
            "/": {
                precedence: 3,
                associativity: "Left"
            },
            "*": {
                precedence: 3,
                associativity: "Left"
            },
            "+": {
                precedence: 2,
                associativity: "Left"
            },
            "-": {
                precedence: 2,
                associativity: "Left"
            }
        }
        infix = infix.replace(/\s+/g, "");
        //infix = infix.split(/([\+\-\*\/\^\(\)])/).clean();
        infix = this.clean(infix.split(/([\+\-\*\/\^\(\)])/));
        for(var i = 0; i < infix.length; i++) {
            var token = infix[i];
            //if(token.isNumeric()) {
            if(this.isNumeric(token)) {
                outputQueue += token + " ";
            } else if("^*/+-".indexOf(token) !== -1) {
                var o1 = token;
                var o2 = operatorStack[operatorStack.length - 1];
                while("^*/+-".indexOf(o2) !== -1 && ((operators[o1].associativity === "Left" && operators[o1].precedence <= operators[o2].precedence) || (operators[o1].associativity === "Right" && operators[o1].precedence < operators[o2].precedence))) {
                    outputQueue += operatorStack.pop() + " ";
                    o2 = operatorStack[operatorStack.length - 1];
                }
                operatorStack.push(o1);
            } else if(token === "(") {
                operatorStack.push(token);
            } else if(token === ")") {
                while(operatorStack[operatorStack.length - 1] !== "(") {
                    outputQueue += operatorStack.pop() + " ";
                }
                operatorStack.pop();
            }
        }
        while(operatorStack.length > 0) {
            outputQueue += operatorStack.pop() + " ";
        }
        return outputQueue;
    }

    calculate(expression){
        console.log(this.yard(expression));
       return this.rpn(this.yard(expression));
    }

    yard (infix) {
        let ops = {'+': 1, '-': 1, '*': 2, '/': 2};
        let peek = (a) => a[a.length - 1];
        let stack = [];
      
        return infix
          //.split('')
          .match(/[^\d()]+|[\d.]+|[(]|[)]/g)
          .reduce((output, token) => {
            if (parseFloat(token)) {
              output.push(token);
            }
      
            if (token in ops) {
              while (peek(stack) in ops && ops[token] <= ops[peek(stack)])
                output.push(stack.pop());
              stack.push(token);
            }
      
            if (token == '(') {
              stack.push(token);
            }
      
            if (token == ')') {
              while (peek(stack) != '(')
                output.push(stack.pop());
              stack.pop();
            }
      
            return output;
          }, [])
          .concat(stack.reverse())
          .join(' ');
      };
      
    rpn (ts, s = []) {
        ts.split(' ').forEach(t =>{ 
          //console.log("t = " + t);
          //s.push(t == +t ? t : eval(s.splice(-2,1)[0] + t + s.pop()));
          s.push(t == +t ? t : this.evaluate(s.splice(-2,1)[0], t, s.pop()));
        }
        );
        return s[0];
    }

    evaluate(operand1, operator, operand2){
        let base = 10;
        let number1 = Number.parseInt(operand1, base);
        let number2 = Number.parseInt(operand2, base);

        console.log("number1 = " + number1 + " number2 = " + number1 + " operator = " + operator)

        switch(operator){   
            case "+": return (number1 + number2);
            case "-": return (number1 - number2);
            case "*": return (number1 * number2);
            case "/": return (number1 / number2);
            default: return 0;      
        }

    }


}

export default CalculatorService;