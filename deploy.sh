# DO_PASS DIGITAL OCEAN PASS
# DO_USR DIGITAL OCEAN USER
# DO_IP DIGITAL OCEAN IP

rm -rf build/
polymer install
polymer build
cd build/
sshpass -p "${DO_PASS}" scp -r default/* ${DO_USR}@${DO_IP}:/var/www/html/gitfame/