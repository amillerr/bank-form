function reset() {
      var a = document.getElementsByClassName('whom');
      // a = HTMLCollection
      console.log(a);
      // You can iterate over HTMLCollection.
      for (var i = 0; i < a.length; i++) {
        // You can set the value in every item in the HTMLCollection.
        a[i].value = "";
      }
    }
