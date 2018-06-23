function bulmaCard() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: './views/directives/bulmaCard.html',
    scope: {
      image: '=',
      title: '='
    }
  };
}

export default bulmaCard;
