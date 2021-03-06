﻿define(['durandal/viewModel', 'samples/global'],
    function (viewModel, global) {

        return {
            activeSample: viewModel.activator(),
            isDFiddle: ko.observable(false),
            dFiddleRepoUrl: ko.observable(''),
            notAvailable: global.notAvailable,
            sampleGroups: [
                {
                    name: 'Basic examples',
                    samples: [{
                        name: 'View composition',
                        hash: '#/view-composition/default',
                        moduleId: 'samples/viewComposition/default/index'
                    }]
                },
                {
                    name: 'Detailed Examples',
                    samples: []
                },
                {
                    name: 'Fiddles',
                    samples: [{
                        name: 'View composition',
                        hash: '#/view-composition/dFiddle',
                        moduleId: 'samples/viewComposition/dFiddle/index'
                    }]
                }
            ],
            activate: function (args) {
                var that = this;
                return global.activateIndex(args, that);
            }
        };
    });