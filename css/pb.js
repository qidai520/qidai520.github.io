
<!--

<!-- 
   //��������Ҽ���Ctrl+N��Shift+F10��F11��F5ˢ�¡��˸�� 
function document.oncontextmenu(){event.returnValue=false;}//��������Ҽ� 
function window.onhelp(){return false} //����F1���� 
function document.onkeydown() 
{ 
  if ((window.event.altKey)&& 
      ((window.event.keyCode==37)||   //���� Alt+ ����� �� 
       (window.event.keyCode==39)))   //���� Alt+ ����� �� 
  { 
     
     event.returnValue=false; 
  } 
     /* ע���⻹�������������� Alt+ ������� 
     ��Ϊ Alt+ ��������������ʱ����ס Alt �����ţ� 
     �������������������η�����ʧЧ�ˡ��Ժ��� 
     ����λ�������������� Alt ���ķ��������֪��*/ 
  if ((event.keyCode==116)||                 //���� F5 ˢ�¼� 
      (event.ctrlKey && event.keyCode==82)){ //Ctrl + R 
     event.keyCode=0; 
     event.returnValue=false; 
     } 
  if (event.keyCode==122){event.keyCode=0;event.returnValue=false;}  //����F11 
  if (event.ctrlKey && event.keyCode==78) event.returnValue=false;   //���� Ctrl+n 
  if (event.shiftKey && event.keyCode==121)event.returnValue=false;  //���� shift+F10 
  if (window.event.srcElement.tagName == "A" && window.event.shiftKey)  
      window.event.returnValue = false;             //���� shift ���������¿�һ��ҳ 
  if ((window.event.altKey)&&(window.event.keyCode==115))             //����Alt+F4 
  { 
      window.showModelessDialog("about:blank","","dialogWidth:1px;dialogheight:1px"); 
      return false; 
  } 
}




 -->
//-->


