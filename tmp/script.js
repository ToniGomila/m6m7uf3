let formData = new FormData();
formData.append("cat1", this.value);

let options = {
          method: 'GET'
      }


fetch("../actions/getCat.php", options)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                let opt = document.createElement('option');
                opt.value= element.id;
                opt.text= element.nom;
                document.getElementById("cats").appendChild(opt);
            });
        })
        .catch((error) => {});