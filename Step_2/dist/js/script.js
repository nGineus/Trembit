'use strict'


function mvcModel(startGameModel) {
    let self = this;
    const NumberOfPlayers = 100;

    self.gameModel = startGameModel;
    self.Arena = new Array(NumberOfPlayers);
    self.Players = [];

    self.Init = function() {
        self.Players = new Array;
        self.Arena.fill(0);
    }

    self.addOne = function() {
        for (let i = 0; i < self.Arena.length; i++) {
            if (self.Arena[i] != 1) {
                self.Arena[i] = 1;
                self.Players.push([i, 1]);
                break;
            }
        }
    }

    self.playRound = function() {
        console.log('Players viewed on ' + self.gameModel.gameName + ' : ' + self.Players.join(' • '));
        for (let i = 0, index = 0; i < self.Players.length; i++) {
            index = self.Players[i][0] + self.Players[i][1];
            if ((index < 0) || (index == NumberOfPlayers) || (self.Arena[index] == 1)) {
                self.Players[i][1] = (self.Players[i][1] == 1) ? -1 : 1;
            } else {
                self.Arena[self.Players[i][0]] = 0;
                self.Arena[index] = 1;
                self.Players[i][0] = index;
            }
        }
    }
}


function mvcView(Model) {
    let self = this;
    let Stadium = $(Model.gameModel.outputID);

    self.Refresh = function() {
        Stadium.html(Model.Arena.join(''));
    }
}


function mvcController(Model, View) {
    let self = this;
    let gameProcessID = setInterval(function() {
        Model.playRound();
        View.Refresh();
    }, Model.gameModel.GameSpeed);

    $(Model.gameModel.addButtonID).click(function() { Model.addOne() });
    $(Model.gameModel.resetButtonID).click(function() { Model.Init() });
    $(Model.gameModel.stopButtonID).click(function() { clearInterval(gameProcessID) });
    Model.Init();

}


$(function() {

    let gameModel1 = {
        gameName: 'Top',
        outputID: '#output',
        addButtonID: '#add-element',
        resetButtonID: '#reset',
        stopButtonID: '#stop',
        GameSpeed: 500
    };

    let gameModel2 = {
        gameName: 'Bottom',
        outputID: '#output2',
        addButtonID: '#add-element2',
        resetButtonID: '#reset2',
        stopButtonID: '#stop2',
        GameSpeed: 200
    };

    let Model = new mvcModel(gameModel1);
    let View = new mvcView(Model);
    let Controller = new mvcController(Model, View);

    let Model2 = new mvcModel(gameModel2);
    let View2 = new mvcView(Model2);
    let Controller2 = new mvcController(Model2, View2);

});