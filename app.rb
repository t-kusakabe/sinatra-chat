require 'sinatra'
require 'sinatra/reloader'
# websocket
require 'sinatra-websocket'
require 'pp'

set :sockets, []

#################
## Controller
################
get '/test.html' do
end

get '/websocket' do
  if request.websocket?
    request.websocket do |ws|
      ws.onopen do
        settings.sockets << ws
      end

      ws.onmessage do |msg|
        settings.sockets.each do |s|
          s.send(msg)
        end
      end

      ws.onclose do
        settings.sockets.delete(ws)
      end
    end
  end
end
