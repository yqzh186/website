FROM daocloud.io/rails:onbuild

ADD ./ /my_blank_rails
WORKDIR /my_blank_rails
EXPOSE 3000

CMD ["puma", "-C", "config/puma.rb"]