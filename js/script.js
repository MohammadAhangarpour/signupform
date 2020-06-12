setTimeout(function() {
    $('.header').css('visibility', 'visible')
    $('.content').css('visibility', 'visible')
    $('.main').css('display', 'none')
}, 0)




$(document).ready(function() {
    $('.palette li').on('click', function() {
        const color = $('.pic').css("background-color");
        $('.pic').css({ 'background-color': $(this).css('background-color') })
        $(this).css({ 'background-color': color });
    })

    $('.menu').on('click', function() {
        if ($(this).hasClass('fas fa-bars')) {
            $(this).removeClass('fas fa-bars').addClass('fas fa-times');
            $('.leftSide').animate({ width: '0px' });
            $('.leftSide .pic').css('display', 'none');
            $('.rightSide').animate({ width: '90vw' });
            $('.leftSide .palette ul').css({ 'flex-direction': 'column', 'margin-right': '40px', 'margin-top': '80px' })
            $('.leftSide .palette ul li').css('margin', '20px')
        } else {
            $(this).removeClass('fas fa-times').addClass('fas fa-bars');
            $('.leftSide').animate({ width: '50vw' });
            $('.leftSide .pic').css('display', 'flex');
            $('.rightSide').animate({ width: '50vw' });
            $('.leftSide .palette ul').css({ 'flex-direction': 'row-reverse', 'margin': '0' })
            $('.leftSide .palette ul').css()
            $('.leftSide .palette ul li').css('margin', '0 40px')
        }
    })

    const form = $('#form');
    const username = $('#username');
    const email = $('#email');
    const password = $('#password');
    const password2 = $('#password2');

    function showError(input, message) {
        const formControl = input.parent();
        formControl.attr('class', 'form-control error');
        const small = $('.form-control:last-child')
        small.text(message);
    }

    function showSuccess(input) {
        const formControl = input.parent();
        formControl.attr('class', 'form-control success');
    }

    function isEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.val().trim())) {
            showSuccess(input);
        } else {
            showError(input, 'Email is not valid');
        }
    }

    function isEmpty(inputArr) {
        inputArr.forEach(function(input) {
            if (input.val().trim() === '') {
                showError(input, `${getInputName(input)} is required`);
            } else {
                showSuccess(input);
            }
        });
    }

    function checkLength(input, min, max) {
        if (input.val().length < min) {
            showError(
                input,
                `${getInputName(input)} must be at least ${min} characters`
            );
        } else if (input.val().length > max) {
            showError(
                input,
                `${getInputName(input)} must be less than ${max} characters`
            );
        } else {
            showSuccess(input);
        }
    }

    function isMatch(input1, input2) {
        if (input1.val() !== input2.val()) {
            showError(input2, 'Passwords do not match');
        }
    }

    function getInputName(input) {
        return input.attr('id').charAt(0).toUpperCase() + input.attr('id').slice(1);
    }

    form.submit(function(e) {
        e.preventDefault();
        isEmpty([username, email, password, password2]);
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        isEmail(email);
        isMatch(password, password2);
    })




})