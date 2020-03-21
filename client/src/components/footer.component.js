import React, { Component } from 'react';


export default class Footer extends Component {

    render() {
      return (
        <footer class="page-footer font-small teal pt-4">
        

          <div class="container text-center text-md-left">
        
            <div class="row">
        
              <div class="col-md-6 mt-md-0 mt-3">
        
                <h5 class="text-uppercase font-weight-bold">Motivation</h5>
                <p>Die Idee ist zu Beginn der Corona-Kirse entstanden. Innerhalb unserer Freudnesgruppe wurden viele themenreleveante Artikel und Inhalte gepostet.
                    Um dort den Überblick zu behalten und meinen Freunden die Möglichkeit zu geben, ihre Artikel selber hinzuzufügen, kam die Idee zu dieser kleinen App.
                </p>
        
              </div>
        
              <hr class="clearfix w-100 d-md-none pb-3"/>
        
              <div class="col-md-6 mb-md-0 mb-3">
        
                <h5 class="text-uppercase font-weight-bold">technologischer Hintergrund</h5>
                <p>Die App ist mit dem MERN-Stack gebaut. Das Projekt gab mir die Möglichkeit mich näher mit MongoDB, Express, React und NodeJS vertraut zu machen. 
                    Ich habe gelernt Backend und Frontend mit einander zu koppeln, einen Server mit Express zu bauen und HTTP-Requests in Verbindung mit meiner Database auf MongoDB durchzuführen. 
                </p>
        
              </div>
        
            </div>
        
          </div>
        
          <div class="footer-copyright text-center py-3">© 2020
            <a href="https://www.lukashoppe.com/"> www.lukashoppe.com</a>
          </div>
        
        </footer>
      )
    }
}