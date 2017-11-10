package com.course.admin.controller;

import com.course.borrower.entity.Item;
import com.course.borrower.entity.Reservation;
import com.course.libraryAdmin.service.ItemAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import java.util.List;

/**
 * Created by 84074 on 2017/11/7.
 */
@RestController
public class AdminItemController {
    @Autowired
    ItemAdminService itemAdminService;

    /**
     * 书目管理页面点击书名进入相应书项管理
     * @param titleId
     * @return
     */
    @RequestMapping(value = "/toItems.action")
    public ModelAndView toItems(@RequestParam("titleId") Integer titleId){
        ModelAndView modelAndView = new ModelAndView("itemAdmin");

        List<Item> list = itemAdminService.queryItemByTitleId(titleId);
        modelAndView.addObject("list",list);
        modelAndView.addObject("titleId",titleId);
        return modelAndView;
    }

    @RequestMapping(value = "/deleteItem.action")
    public ModelAndView deleteItem(@RequestParam("itemId") Integer itemId,@RequestParam("titleId") Integer titleId){
        ModelAndView modelAndView = new ModelAndView("redirect:/toItems.action?titleId="+titleId);
        itemAdminService.deleteItem(itemId,titleId);
        return modelAndView;
    }
    @RequestMapping(value = "/addItem.action")
    public ModelAndView addItem(@RequestParam("codeAdd") String libraryCode ,@RequestParam("titleId") Integer titleId ){
        ModelAndView modelAndView = new ModelAndView("redirect:/toItems.action?titleId="+titleId);
        itemAdminService.addItem(libraryCode,titleId);
        return modelAndView;
    }

    @RequestMapping(value = "/validateLibraryCode.action")
    public String validateLibraryCode(@RequestParam("libraryCode") String libraryCode){
        if(!itemAdminService.isExist(libraryCode)) {
            return "yes";
        }
        else
            return "no";
    }

    @RequestMapping(value = "/toWork.action")
    public ModelAndView toLoan(){
        ModelAndView modelAndView = new ModelAndView("UserWork");
        return modelAndView;
    }
    @RequestMapping(value = "/toReservation.action")
    public ModelAndView toReservation(){
        List<Reservation> list = itemAdminService.findAllReservation();
        ModelAndView modelAndView = new ModelAndView("UserReservation");
        modelAndView.addObject("list",list);
        return modelAndView;
    }

    @RequestMapping(value = "/LoanItem.action")
    public ModelAndView deleteUndergraduate(@RequestParam("cardNo")String cardNo,
                                            @RequestParam("libraryCode")String libraryCode){

        ModelAndView modelAndView = new ModelAndView("redirect:/toWork.action");

        itemAdminService.loanBook(cardNo,libraryCode);

        modelAndView.addObject("cardNo",cardNo);
        modelAndView.addObject("libraryCode",libraryCode);
        return modelAndView;
    }
    @RequestMapping(value = "/checkCompensation.action")
    public double checkCompensation(@RequestParam("libraryCode") String libraryCode){
        double compensation = itemAdminService.checkCompensation(libraryCode);
        return compensation;
    }
    @RequestMapping(value = "/returnItem.action")
    public ModelAndView returnItem(@RequestParam("libraryCodeReturn")String libraryCode){
        ModelAndView modelAndView = new ModelAndView("redirect:/toWork.action");
        itemAdminService.returnBook(libraryCode);

//        modelAndView.addObject("libraryCodeReturn", libraryCode);
        return modelAndView;
    }
}
