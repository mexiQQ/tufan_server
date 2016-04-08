###########
# Usage:
#
#  docker build --force-rm -t fourteen/server .
#  docker run -it --name tufan_server -p 3000:3000 -v /data/tufan/current:/workspace --add-host=hostip:104.131.144.1 fourteen/server 
#

FROM ubuntu 
MAINTAINER fourteen 

RUN rm -vrf /var/lib/apt/lists/*  
RUN echo "deb http://archive.ubuntu.com/ubuntu precise universe" >> /etc/apt/sources.list
RUN apt-get update  
RUN apt-get install -y tar git
RUN apt-get install -y curl 
RUN apt-get install -y python

# 配置环境变量
ENV NVM_DIR /usr/local/nvm  
ENV NODE_VERSION 0.10.40 
ENV WORK_DIR /workspace

# 下载和配置Node.js环境
# 这些命令一定要写在一起, 否则`nvm`命令会找不到
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash \  
    && . $NVM_DIR/nvm.sh \
    && nvm install v$NODE_VERSION \
    && nvm use v$NODE_VERSION \
    && nvm alias default v$NODE_VERSION

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules  
ENV PATH      $NVM_DIR/v$NODE_VERSION/bin:$PATH

RUN npm install -g nrm
RUN npm install -g pm2 
RUN npm install -g gulp 
RUN nrm use taobao 

# 设置工作目录
WORKDIR $WORK_DIR

# 公开镜像的80端口
EXPOSE 3000

CMD bash 

