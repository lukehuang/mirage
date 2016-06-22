import { describe, it, beforeEach, expect } from '@angular/core/testing';

import { LtQuery } from './lt.query';

describe('Lt query format', () => {

  // Set initial things
  // set expected query format
  var query: LtQuery;
  var expectedFormat = {
    'range': {
      'foo': {
        'lt': 100
      }
    }
  };

  // instantiate query component and set the input fields 
  beforeEach(function() {
    query = new LtQuery();
    query.queryName = 'lt';
    query.fieldName = 'foo';
    query.inputs = {
      lt: {
        value: 100
      }
    };
  });

  function isValidJson(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  // Test to check if queryformat is valid json
  it('is valid json', () => {
    var format = query.setFormat();
    var validJson = isValidJson(JSON.stringify(format));
    expect(validJson).toEqual(true);
  });

  // Test to check if result of setformat is equal to expected query format.
  it('Is setformat matches with expected query format', () => {
    var format = query.setFormat();
    expect(format).toEqual(expectedFormat);
  });

})

declare var $;
describe("Lt query test with xhr call", function () {
    var returnedJSON = {};
    var status = 0;

    beforeEach(function (done) {
        var query = new LtQuery();
        query.queryName = 'lt';
        query.fieldName = 'foo';
        query.inputs = {
          lt: {
            value: 100
          }
        };
        var config = {
            url: 'https://scalr.api.appbase.io',
            appname: 'App3',
            username: 'CnqEgei0f',
            password: 'a2176969-de4c-4ed0-bbbe-67e152de04f7'
        };
        var url = 'https://scalr.api.appbase.io/App3/testing/_search';
        var query_data = query.setFormat();
        var request_data = {
            "query": {
                "bool": {
                    "must": [query_data]
                }
            }
        };
        $.ajax({
            type: 'POST',
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", "Basic " + btoa(config.username + ':' + config.password));
            },
            url: url,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(request_data),
            xhrFields: {
                withCredentials: true
            },
            success: function(res) {
                returnedJSON = res;
                status = 200;
                done();
            },
            error: function(xhr) {
                returnedJSON = res;
                status = xhr.status;
                done();
            }
        });
    });

    it("Should have returned JSON", function () {
        expect(returnedJSON).not.toEqual({});
        expect(returnedJSON).not.toBeUndefined();
        expect(status).toEqual(200);
    });

});