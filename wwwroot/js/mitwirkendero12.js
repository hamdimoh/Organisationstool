﻿var dataTable;
$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/O_Mitwirkende/getall' },
        "language":
        {
            "emptyTable": "Keine Daten in der Tabelle vorhanden",
            "info": "_START_ bis _END_ von _TOTAL_ Einträgen",
            "infoEmpty": "Keine Daten vorhanden",
            "infoFiltered": "(gefiltert von _MAX_ Einträgen)",
            "infoThousands": ".",
            "loadingRecords": "Wird geladen ..",
            "processing": "Bitte warten ..",
            "paginate": {
                "first": "Erste",
                "next": "Nächste",
                "last": "Letzte",
                "previous": "Vorherige"
            },
            "aria": {
                "sortAscending": ": aktivieren, um Spalte aufsteigend zu sortieren",
                "sortDescending": ": aktivieren, um Spalte absteigend zu sortieren"
            },
            "select": {
                "rows": {
                    "_": "%d Zeilen ausgewählt",
                    "1": "1 Zeile ausgewählt"
                },
                "cells": {
                    "1": "1 Zelle ausgewählt",
                    "_": "%d Zellen ausgewählt"
                },
                "columns": {
                    "1": "1 Spalte ausgewählt",
                    "_": "%d Spalten ausgewählt"
                }
            },
            "buttons": {
                "print": "Drucken",
                "copy": "Kopieren",
                "copyTitle": "In Zwischenablage kopieren",
                "copySuccess": {
                    "_": "%d Zeilen kopiert",
                    "1": "1 Zeile kopiert"
                },
                "collection": "Aktionen <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
                "colvis": "Spaltensichtbarkeit",
                "colvisRestore": "Sichtbarkeit wiederherstellen",
                "csv": "CSV",
                "excel": "Excel",
                "pageLength": {
                    "-1": "Alle Zeilen anzeigen",
                    "1": "Zeige 1 Zeile",
                    "_": "Zeige %d Zeilen"
                },
                "pdf": "PDF",
                "createState": "Ansicht erstellen",
                "removeAllStates": "Alle Ansichten entfernen",
                "removeState": "Entfernen",
                "renameState": "Umbenennen",
                "savedStates": "Gespeicherte Ansicht",
                "stateRestore": "Ansicht %d",
                "updateState": "Aktualisieren",
                "copyKeys": "Drücken Sie die Taste <i>STRG<\/i> oder <i>⌘<\/i> + <i>C<\/i> um die Tabelle<br \/>in den Zwischenspeicher zu kopieren.<br \/><br \/>Um den Vorgang abzubrechen, klicken Sie die Nachricht an oder drücken Sie die Escape-Taste."
            },
            "autoFill": {
                "cancel": "Abbrechen",
                "fill": "Alle Zellen mit <i>%d<i> füllen<\/i><\/i>",
                "fillHorizontal": "Alle horizontalen Zellen füllen",
                "fillVertical": "Alle vertikalen Zellen füllen",
                "info": "Automatische Vervollständigung"
            },
            "decimal": ",",
            "search": "Suche:",
            "searchBuilder": {
                "add": "Bedingung hinzufügen",
                "button": {
                    "0": "Such-Baukasten",
                    "_": "Such-Baukasten (%d)"
                },
                "condition": "Bedingung",
                "conditions": {
                    "date": {
                        "after": "Nach",
                        "before": "Vor",
                        "between": "Zwischen",
                        "empty": "Leer",
                        "not": "Nicht",
                        "notBetween": "Nicht zwischen",
                        "notEmpty": "Nicht leer",
                        "equals": "Gleich"
                    },
                    "number": {
                        "between": "Zwischen",
                        "empty": "Leer",
                        "equals": "Entspricht",
                        "gt": "Größer als",
                        "gte": "Größer als oder gleich",
                        "lt": "Kleiner als",
                        "lte": "Kleiner als oder gleich",
                        "not": "Nicht",
                        "notBetween": "Nicht zwischen",
                        "notEmpty": "Nicht leer"
                    },
                    "string": {
                        "contains": "Beinhaltet",
                        "empty": "Leer",
                        "endsWith": "Endet mit",
                        "equals": "Entspricht",
                        "not": "Nicht",
                        "notEmpty": "Nicht leer",
                        "startsWith": "Startet mit",
                        "notContains": "enthält nicht",
                        "notStartsWith": "startet nicht mit",
                        "notEndsWith": "endet nicht mit"
                    },
                    "array": {
                        "equals": "ist gleich",
                        "empty": "ist leer",
                        "contains": "enthält",
                        "not": "ist ungleich",
                        "notEmpty": "ist nicht leer",
                        "without": "aber nicht"
                    }
                },
                "data": "Daten",
                "deleteTitle": "Filterregel entfernen",
                "leftTitle": "Äußere Kriterien",
                "rightTitle": "Innere Kriterien",
                "title": {
                    "0": "Such-Baukasten",
                    "_": "Such-Baukasten (%d)"
                },
                "value": "Wert",
                "clearAll": "Alle entfernen",
                "logicAnd": "Und",
                "logicOr": "Oder"
            },
            "searchPanes": {
                "clearMessage": "Leeren",
                "collapse": {
                    "0": "Suchmasken",
                    "_": "Suchmasken (%d)"
                },
                "countFiltered": "{shown} ({total})",
                "emptyPanes": "Keine Suchmasken",
                "title": "Aktive Filter: %d",
                "showMessage": "zeige Alle",
                "collapseMessage": "Alle einklappen",
                "count": "{total}",
                "loadMessage": "Lade Suchmasken..."
            },
            "thousands": ".",
            "zeroRecords": "Keine passenden Einträge gefunden",
            "lengthMenu": "_MENU_ Zeilen anzeigen",
            "datetime": {
                "previous": "Vorher",
                "next": "Nachher",
                "hours": "Stunden",
                "minutes": "Minuten",
                "seconds": "Sekunden",
                "unknown": "Unbekannt",
                "weekdays": [
                    "Sonntag",
                    "Montag",
                    "Dienstag",
                    "Mittwoch",
                    "Donnerstag",
                    "Freitag",
                    "Samstag"
                ],
                "months": [
                    "Januar",
                    "Februar",
                    "März",
                    "April",
                    "Mai",
                    "Juni",
                    "Juli",
                    "August",
                    "September",
                    "Oktober",
                    "November",
                    "Dezember"
                ]
            },
            "editor": {
                "close": "Schließen",
                "create": {
                    "button": "Neu",
                    "title": "Neuen Eintrag erstellen",
                    "submit": "Erstellen"
                },
                "remove": {
                    "confirm": {
                        "_": "Sollen %d Zeilen gelöscht werden?",
                        "1": "Soll diese Zeile gelöscht werden?"
                    },
                    "button": "Entfernen",
                    "title": "Entfernen",
                    "submit": "Entfernen"
                },
                "error": {
                    "system": "Ein Systemfehler ist aufgetreten"
                },
                "multi": {
                    "title": "Mehrere Werte",
                    "info": "Die ausgewählten Elemente enthalten mehrere Werte für dieses Feld. Um alle Elemente für dieses Feld zu bearbeiten und auf denselben Wert zu setzen, klicken oder tippen Sie hier, andernfalls behalten diese ihre individuellen Werte bei.",
                    "restore": "Änderungen zurücksetzen",
                    "noMulti": "Dieses Feld kann nur einzeln bearbeitet werden, nicht als Teil einer Mengen-Änderung."
                },
                "edit": {
                    "button": "Bearbeiten",
                    "title": "Eintrag bearbeiten",
                    "submit": "Bearbeiten"
                }
            },
            "searchPlaceholder": "Suchen...",
            "stateRestore": {
                "creationModal": {
                    "button": "Erstellen",
                    "columns": {
                        "search": "Spalten Suche",
                        "visible": "Spalten Sichtbarkeit"
                    },
                    "name": "Name:",
                    "order": "Sortieren",
                    "paging": "Seiten",
                    "scroller": "Scroll Position",
                    "search": "Suche",
                    "searchBuilder": "Such-Baukasten",
                    "select": "Auswahl",
                    "title": "Neue Ansicht erstellen",
                    "toggleLabel": "Inkludiert:"
                },
                "duplicateError": "Eine Ansicht mit diesem Namen existiert bereits.",
                "emptyError": "Name darf nicht leer sein.",
                "emptyStates": "Keine gespeicherten Ansichten",
                "removeConfirm": "Bist du dir sicher, dass du %s entfernen möchtest?",
                "removeError": "Entfernen der Ansicht fehlgeschlagen.",
                "removeJoiner": " und ",
                "removeSubmit": "Entfernen",
                "removeTitle": "Ansicht entfernen",
                "renameButton": "Umbenennen",
                "renameLabel": "Neuer Name für %s:",
                "renameTitle": "Ansicht umbenennen"
            }

        },

        "columns": [
            { data: 'name', "width": "25%" },
            { data: 'email', "width": "15%" },
            { data: 'aufgaben', "width": "15%" },
            { data: 'essen', "width": "15%" },
            { data: 'allergien', "width": "15%" },
            { data: 'veranstaltung.namederVeranstaltung', "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                     <a href="/O_Mitwirkende/upsert?id=${data}" class="btn btn-success mx-2"> <i class="bi bi-pencil-square"></i> Bearbeiten</a>               
                     <a onClick=Delete('/O_Mitwirkende/delete/${data}') class="btn btn-danger mx-2"> <i class="bi bi-trash-fill"></i> Löschen</a>
                    </div>`
                },
                "width": "25%"
            }
        ]
    });
}

function Delete(url) {
    Swal.fire({
        title: 'Sind Sie sicher, dass Sie dies löschen möchten?',
        text: "Dieser Vorgang kann nicht rückgängig gemacht werden und die Daten werden dauerhaft gelöscht!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ja!',
        cancelButtonText: "Nein"

    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    dataTable.ajax.reload();
                    toastr.success(data.message);
                }
            })
        }
    })

}