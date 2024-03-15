#!/usr/bin/env zsh

# RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR
# ===========================================================
# RR * RR * RR * RR * RR * RR * RR *       WELCOME TO REVRBEL
# ===========================================================
# RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR RR

 #   LINUX  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   
 # MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  PRE-LODING

   neofetch
   zmodload zsh/zprof
   zstyle :omz:plugins:ssh-agent lazy yes
   autoload zmv

 # MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM


# MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  1PASSWORD

 ##  eval "$(op completion zsh)"; compdef _op op

 # MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 

 # MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  DEFAULT PATHS

  export PATH="/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/etc:/var/lib:${PATH}"

 # MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  ZSH CONFIG
  
 # MMMMM ZSH PATHS

    export ZSH=${HOME}/.oh-my-zsh
    export ZSH_CUSTOM=${HOME}/.oh-my-zsh/custom
    export ZSH_CONFIG=${HOME}/.zsh_config

 # MMMMM ZSH THEME
  
    ZSH_THEME=nanotech

 # MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM

 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 # ZSH LOCAL          /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

   HOSTNAME=$(hostname)
   export HOSTNAME

   export ZSH_LOCAL=${HOME}/.zsh_config/${HOSTNAME}.zsh
   source ${ZSH_LOCAL}

   alias edit-local="nano ${ZSH_LOCAL}"

 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 # ZSH SETTINGS       /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

 #          DISABLE_MAGIC_FUNCTIONS=true
 #          DISABLE_LS_COLORS=true
 #          DISABLE_AUTO_TITLE=true
 #          DISABLE_UNTRACKED_FILES_DIRTY
     export ENABLE_CORRECTION=true
     export DISABLE_UPDATE_PROMPT=true
     export COMPLETION_WAITING_DOTS=true
 #          HIST_STAMPS=mm/dd/yyyy
 #          zstyle ':omz:update' frequency 13 
 #          zstyle ':omz:update' mode disabled               
 #          zstyle ':omz:update' mode auto                   
            zstyle ':omz:update' mode reminder              
            zstyle ':omz:lib:theme-and-appearance' gnu-ls yes
 #          zstyle ':omz:plugins:*' aliases no
 #          zstyle ':omz:plugins:git' aliases yes

 alias link_zshrc='ln -s "${HOME}"/.zsh_config/zshrc_linux ${HOME}/.zshrc'
 alias startagent='eval ssh-agent && ssh-add "${HOME}"/.ssh/rebelkey'

#    function link_zshcustom() {
#        mv "${HOME}/.oh-my-zsh/custom/plugins" "${HOME}/.oh-my-zsh/custom/plugins-org" 
#        ln -s "${HOME}/.zsh_config/ohmyzsh_custom" "${HOME}/.oh-my-zsh/custom/plugins"
#    }

#/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
# LOCAL SETTINGS     /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
#/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

  export PUID=1000
  export PGID=1000
  export TZ=America/Los_Angeles
  export LANG=en_US.UTF-8
  export LC_ALL="en_US.UTF-8"
  export HISTFILE=~/.histfile
  export HISTSIZE=1000
  export SAVEHIST=1000
  setopt appendhistory


 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 # ENVS FOR EVERYONE      /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\


    # shellcheck source=${HOME}/.zsh_config/secrets/
    SECRETS_PATH=${HOME}/.zsh_config/secrets
    export SECRETS_PATH

 
 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 # USER CONFIGURATION     /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\


   MANPATH="/usr/local/man:${MANPATH}"
   export MANPATH
   
   ZSH_CONFIG_DIR=${HOME}/.zsh_config
   export ZSH_CONFIG_DIR
 
 # export XDG_CONFIG_HOME=/opt


# MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM   MISC

  # [i] enables scrolling in the terminal with the trackpad

   LESS=-R
   export LESS
   
  # MMMMMMMMMMMMMMMMMMMM   DEFAULT EDITOR

   if [[ -n ${SSH_CONNECTION} ]]; then
   export EDITOR=nano
   else
   export EDITOR=mvim
   fi

  # MMMMMMMMMMMMMMMM   HELP DIR SETTINGS

   export HELPDIR=${HOME}/.zsh_config/zsh_help
 # unalias run-help
   autoload run-help
   export HELPDIR

 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 # PLUGINS          /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
 #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

 # STD PLUGINS         >>      $ZSH/plugins/
 # CUSTOM PLUGNS       >>      $ZSH_CUSTOM/plugins/

  export plugins=(
      git
      rebel-syncthing
      repo
      sudo
      systemd
      rebel-common
      zsh-autosuggestions
      zsh-syntax-highlighting
      zsh-completions
  )
  
  source "${ZSH}/oh-my-zsh.sh"

  source ${ZSH_CUSTOM}/plugins/rebel-common/rebel-common.plugin.zsh
  source ${ZSH_CUSTOM}/plugins/rebel-syncthing/rebel-syncthing.plugin.zsh
  source ${ZSH_CUSTOM}/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
  source ${ZSH_CUSTOM}/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
  source $ZSH/plugins/ubuntu/systemd.plugin.zsh
  source $ZSH/plugins/sudo/sudo.plugin.zsh
  source $ZSH/plugins/repo/repo.plugin.zsh
  source $ZSH/plugins/git/git.plugin.zsh  
  fpath+=${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions/src

  export plugins


  # POSTGRES
  #########################
  alias pg-stat='systemctl status postgresql'
  alias pg-restart='systemctl restart postgresql'
  alias pg-start='systemctl start postgresql'
  alias pg-logs='tail -n 200 /var/log/postgresql/postgresql-${PGVER}-main.log'
  alias pg-hba='nano /etc/postgresql/${PGVER}/main/pg_hba.conf'
  alias pg-conf='nano /etc/postgresql/${PGVER}/main/postgresql.conf'
  alias pg-root='cd /etc/postgresql/${PGVER}/main'
  alias pg-cmd='sudo -u postgres psql'
  alias start-db='/home/zohodatabridge/StartServer.sh </dev/null &>/dev/null &'
  alias copy-certs='bash /etc/letsencrypt/renewal-hooks/deploy/ssl-deploy-postgres'
  alias start-sync='syncthing </dev/null &>/dev/null &'




  #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
  # LOAD ZSH FILES     /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
  #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

  # MMMMMMMMMMMMMMMMMMMMMMMM   SOURCE ZSH_FUNCTIONS
  

  ZSH_FUNCTIONS=${HOME}/.zsh_config/zsh_functions
  # shellcheck source=${HOME}/.zsh_config/zsh_functions
  export ZSH_FUNCTIONS
  
  add_functions() {
    if [[ -z ${1} || -z ${2} || $# -gt 2 ]]; then
      echo usage:
      printif "\t\${0}" ll ls -l
    else
      echo alias "${1}"="${2}" >> "${ZSH_FUNCTIONS}"
      echo alias ADDED to "${ZSH_FUNCTIONS}"
    fi
  }


  #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
  #/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\  



