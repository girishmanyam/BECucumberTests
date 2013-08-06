#!/usr/bin/env ruby

`rbfu @1.9.3-p362 bundle install`
`rbfu @1.9.3-p362 bundle exec cucumber --format json -o cucumber.json`

