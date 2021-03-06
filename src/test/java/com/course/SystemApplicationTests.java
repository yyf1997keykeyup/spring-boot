package com.course;

import com.course.admin.entity.Borrower;
import com.course.admin.repository.BorrowerJPA;
import com.course.admin.service.AdminBookService;
import com.course.admin.service.ValidateService;
import com.course.borrower.entity.Book;
import com.course.borrower.entity.Item;
import com.course.borrower.repository.BookJPA;
import com.course.borrower.service.BorrowerTitleService;
import com.course.libraryAdmin.service.ItemAdminService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SystemApplicationTests {
	@Autowired
	AdminBookService adminBookService;
	@Test
	public void contextLoads() {

	}

/*	@Test
	public void addbook(){
		Book book =new Book();
		book.setAuthor("aa");
		book.setPress("few");
		book.setPublishDate(new Date(2017/9/9));
		book.setVersion("ef");
		book.setIsbn("fwefwfewf");
		book.setName("sef");
		book.setType("书籍");
		adminBookService.addBook(book);

	}*/
	@Test
	public void testUpdate () {
		Book book = new Book();
		book.setId(1);
		book.setName("fwuhfe");
		adminBookService.changeBook(book);

	}
	@Autowired
	ItemAdminService itemAdminService;
	@Test
	public void addItem(){
		itemAdminService.addItem("xxxx11",4);

	}
	@Test
	public void deleteItem(){
		itemAdminService.deleteItem(11,4);
	}

	@Test
	public void addLoan(){
		itemAdminService.loanBook("1","xxxx11");
	}

	@Test
	public void returnBook(){
		itemAdminService.returnBook("xxxx11");
	}

	@Test
	public void addLosebook(){
		itemAdminService.addLose("xxxx11");
	}
	@Test
	public  void addReservation(){
		itemAdminService.addReservation("xxxx11","1");
	}
	@Test
	public void isAvailable(){
		if(itemAdminService.isAvailable("xxxx11"))
			System.out.print("===================");
		else System.out.print("----------------------");
	}
	@Test
	public  void  isExist(){
		if(itemAdminService.isExist("xxxx11")){
			System.out.print("===================");
		}else{
			System.out.print("----------------------");
		}
	}
	@Autowired
	BorrowerJPA borrowerJPA;
	@Autowired
	ValidateService validateService;
	@Test
	public void checkNum(){
		Borrower borrower = borrowerJPA.findByUsername("1");
		if(validateService.checkOutOfNum(borrower))
			System.out.print("===================");
	}
	@Autowired
	BorrowerTitleService borrowerTitleService;
	@Test
	public void deRes(){
		borrowerTitleService.cancelReservation(6);
	}

	@Test
	public void queryItem(){
		List<Item> list= itemAdminService.borrowerQueryItem(4);
		for (Item item:list){
			System.out.print(item.getLibraryCode());
		}
	}
}
