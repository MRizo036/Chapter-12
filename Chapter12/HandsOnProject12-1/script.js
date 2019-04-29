function display(event) {
    $(event.currentTarget).next().toggle();
}

$("h3").click(display);