import React, { Component } from 'react';


export default class Footer extends Component {

    render() {
      return (
        <footer class="page-footer font-small teal pt-4">
        

          <div class="container text-center text-md-left">
        
            <div class="row">
        
              <div class="col-md-6 mt-md-0 mt-3">
        
                <h5 class="text-uppercase font-weight-bold">Motivation</h5>
                <p>Innerhalb unserer Freundesgruppe werden während der Corona-Krise viele themenrelevante Artikel und Inhalte von hoher Qualität gepostet.
                    Um dort den Überblick zu behalten und meinen Freunden die Möglichkeit zu geben, ihre Artikel selber hinzuzufügen, kam die Idee zu dieser Mini-App. Außerdem beobachte ich immer mehr,
                    das Viele von dem Virus und seinen minütlichen Meldungen überwältigt sind und als natürliche Folge in einen Zustand der Panik fliehen. Panik würde per Definition bedeuten, dass wir keinen Ausweg mehr haben. 
                    Das sehe ich aber nicht so. Jeder sollte die Thematik auf so vielen wegen wie möglich entdecken.
                    Mit einer guten Grundlage an Wissen und Informationen, lassen sich die Probleme und Folgen sachlich und strukturiert angehen. 
                    So kann viel Angst und Panik vermieden werden. 
                </p>
        
              </div>
        
              <hr class="clearfix w-100 d-md-none pb-3"/>
        
              <div class="col-md-6 mb-md-0 mb-3">
        
                <h5 class="text-uppercase font-weight-bold">technologischer Hintergrund</h5>
                <p>Ich möchte damit hauptsächlich lernen, wie man Apps strukturiert aufbaut und welche technologischen Abläufe dahinter stehen. 
                  Die App ist mit dem MERN-Stack gebaut. Das Projekt gab mir die Möglichkeit mich näher mit MongoDB, Express, React und NodeJS vertraut zu machen. 
                    Ich habe gelernt Backend und Frontend mit einander zu koppeln, einen Server mit Express zu bauen und mir mit HTTP-Requests Daten vom Server zu holen.
                    Vllt. werde ich Zukunft noch etwas weiter daran bauen, um mir beispielsweise User Authentication und Bewertungssysteme (Up-/Downvotes) anzuschauen. 
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