FROM daocloud.io/rails:onbuild

ADD ./ /website
WORKDIR /website
EXPOSE 3000

CMD ["puma", "-C", "config/puma.rb"]